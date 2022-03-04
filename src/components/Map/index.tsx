import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

type place = {
  id: string
  name: string
  slug: string
  location: {
    lat: number
    lng: number
  }
}

export type MapProps = {
  places?: place[]
}

const Map = ({ places }: MapProps) => (
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
      const { lat, lng } = location
      return (
        <Marker key={`place-${id}`} position={[lat, lng]} title={name}>
          <Popup>
            <a href={`/places/${slug}`}>{name}</a>
          </Popup>
        </Marker>
      )
    })}
  </MapContainer>
)

export default Map
