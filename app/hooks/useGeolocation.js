'use client'
import { useState } from 'react'

export default function useGeolocation() {
	const [latitude, setLatitude] = useState('')
	const [longitude, setLongitude] = useState('')
	const [loading, setLoading] = useState(false)
	const [isError, setIsError] = useState(null)

	function success(position) {
		setLatitude(position.coords.latitude)
		setLongitude(position.coords.longitude)
		setIsError(null)
		// mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`
	}

	function error() {
		setLoading(false)
		setIsError('Unable to retrieve your location')
	}

	const handleGeolocation = () => {
		if (!navigator.geolocation) {
			setIsError('Geolocation is not supported by your browser')
		} else {
			setLoading(true)
			navigator.geolocation.getCurrentPosition(success, error)
			setLoading(false)
		}
	}

	return { latitude, loading, longitude, isError, handleGeolocation }
}
