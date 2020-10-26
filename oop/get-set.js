const data = {
    locations: [],
    get location() {
        return this._location

    },
    set location(value) {
        this._location = value.trim()
        this.locations.push(this._location)

    }
}

data.location = ' Greensboro '
console.log(data.location);
data.location = 'Charleston '
console.log(data)