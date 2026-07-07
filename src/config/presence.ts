export type PresenceStatus = 'available' | 'busy' | 'away' | 'offline'

export interface PresencePerson {
  id: string
  name: string
  initials: string
  role: string
  detail: string
  status: PresenceStatus
  statusLabel: string
  updatedAt: string
}

export const presencePeople: PresencePerson[] = [
  {
    id: 'elena-park',
    name: 'Elena Park',
    initials: 'EP',
    role: 'Front Desk',
    detail: 'Lobby station',
    status: 'available',
    statusLabel: 'Available',
    updatedAt: 'Updated 08:14',
  },
  {
    id: 'marcus-hale',
    name: 'Marcus Hale',
    initials: 'MH',
    role: 'Security',
    detail: 'North entrance',
    status: 'busy',
    statusLabel: 'In use',
    updatedAt: 'Updated 08:12',
  },
  {
    id: 'rina-patel',
    name: 'Rina Patel',
    initials: 'RP',
    role: 'Support',
    detail: 'Assisting kiosk 4',
    status: 'away',
    statusLabel: 'Away',
    updatedAt: 'Updated 08:09',
  },
  {
    id: 'owen-brooks',
    name: 'Owen Brooks',
    initials: 'OB',
    role: 'Facilities',
    detail: 'Loading dock',
    status: 'available',
    statusLabel: 'Available',
    updatedAt: 'Updated 08:16',
  },
  {
    id: 'talia-nguyen',
    name: 'Talia Nguyen',
    initials: 'TN',
    role: 'Operations',
    detail: 'Control room',
    status: 'offline',
    statusLabel: 'Offline',
    updatedAt: 'Updated 07:58',
  },
  {
    id: 'jonas-reed',
    name: 'Jonas Reed',
    initials: 'JR',
    role: 'Maintenance',
    detail: 'South corridor',
    status: 'busy',
    statusLabel: 'In use',
    updatedAt: 'Updated 08:11',
  },
]
