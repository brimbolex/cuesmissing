export type PresenceStatus = 'present' | 'absent' | 'unknown' | 'error'

export interface PresenceLocation {
  id: string
  name: string
  detail?: string
  status: PresenceStatus
  statusLabel: string
  updatedAt: string
}

export const presenceLocations: PresenceLocation[] = [
  {
    id: 'resi-a101',
    name: 'RESI A101',
    detail: 'Besprechung aktiv',
    status: 'present',
    statusLabel: 'anwesend',
    updatedAt: 'Letzte Aktualisierung 08:14',
  },
  {
    id: 'resi-a102',
    name: 'RESI A102',
    detail: 'Keine Belegung erkannt',
    status: 'absent',
    statusLabel: 'abwesend',
    updatedAt: 'Letzte Aktualisierung 08:12',
  },
  {
    id: 'resi-b201',
    name: 'RESI B201',
    detail: 'Sensor meldet Bewegung',
    status: 'present',
    statusLabel: 'anwesend',
    updatedAt: 'Letzte Aktualisierung 08:09',
  },
  {
    id: 'resi-b202',
    name: 'RESI B202',
    detail: 'Verbindung instabil',
    status: 'unknown',
    statusLabel: 'unbekannt',
    updatedAt: 'Letzte Aktualisierung 08:16',
  },
  {
    id: 'resi-c301',
    name: 'RESI C301',
    detail: 'Gateway antwortet nicht',
    status: 'error',
    statusLabel: 'fehler',
    updatedAt: 'Letzte Aktualisierung 07:58',
  },
  {
    id: 'resi-c302',
    name: 'RESI C302',
    detail: 'Leerstand bestätigt',
    status: 'absent',
    statusLabel: 'abwesend',
    updatedAt: 'Letzte Aktualisierung 08:11',
  },
]
