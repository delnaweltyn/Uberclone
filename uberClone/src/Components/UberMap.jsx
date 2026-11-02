import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function UberMap() {

    const position = [10.5471, 76.2245]

    return (
        <div className="map-container">

            <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={true}
                className="uber-map"
            >

                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={position}>
                    <Popup>
                        Pickup Location - Thrissur
                    </Popup>
                </Marker>

            </MapContainer>

        </div>
    )
}

export default UberMap