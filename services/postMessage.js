export default function postMessage (data) {
  const response = window.fetch('https://ancient-thicket-10868.herokuapp.com/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return response
}
