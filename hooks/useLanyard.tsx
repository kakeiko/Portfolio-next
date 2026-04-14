import { useState, useEffect } from 'react';

interface DiscordUser {
  id: string;
  username: string;
  global_name: string | null;
  avatar: string;
  discriminator: string;
}

interface Activity {
  type: number;
  name: string;
  details?: string;
  state?: string;
}

export interface LanyardData {
  discord_user: DiscordUser;
  discord_status: 'online' | 'idle' | 'dnd' | 'offline';
  activities: Activity[];
  listening_to_spotify: boolean;
}

export function useLanyard(userId: string): LanyardData | null {
  const [presence, setPresence] = useState<LanyardData | null>(null);

  useEffect(() => {
    let heartbeatInterval: ReturnType<typeof setInterval> | null = null;
    const socket = new WebSocket('wss://api.lanyard.rest/socket');

    socket.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);

      if (data.op === 1) {
        socket.send(JSON.stringify({
          op: 2,
          d: { subscribe_to_id: userId },
        }));

        heartbeatInterval = setInterval(() => {
          if (socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({ op: 3 }));
          }
        }, data.d.heartbeat_interval);
      }

      if (data.t === 'INIT_STATE' || data.t === 'PRESENCE_UPDATE') {
        setPresence(data.d as LanyardData);
      }
    };

    return () => {
      if (heartbeatInterval) clearInterval(heartbeatInterval);
      socket.close();
    };
  }, [userId]);

  return presence;
}