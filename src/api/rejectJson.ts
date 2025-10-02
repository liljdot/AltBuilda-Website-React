const rejectJson = (res: Response) => {
    return new Promise((_, reject) => {
        res.json()
            .then(json => reject(json))
    })
}

export default rejectJson