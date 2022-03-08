import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

type place = {
  id: string
  name?: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: place[]
}

const Map = ({ places }: MapProps) => {
  console.log(places)
  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{
        height: '100%',
        width: '100%'
      }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places?.map(({ id, name, slug, location }) => {
        const { latitude, longitude } = location
        return (
          <Marker
            key={`place-${id}`}
            position={[latitude, longitude]}
            title={name}
          >
            <Popup>
              <a href={`/places/${slug}`}>{name}</a>
            </Popup>
          </Marker>
        )
      })}
    </MapContainer>
  )
}
export default Map
