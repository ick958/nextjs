function App() {
    const date = new Date
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const formatedH = hour+":"+minutes+":"+seconds
    return <h1> {formatedH} </h1>
}

export default App