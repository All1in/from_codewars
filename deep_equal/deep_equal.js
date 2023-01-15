function deepEqual(a, b) {
    if (Number.isNaN(a) && Number.isNaN(b)) {
        return true
    }


    if (typeof a !== typeof b) {
        return false
    }

    if (typeof a !== 'object' || a === null || b === null) {
        return a === b
    }

    if (Object.keys(a).length !== Object.keys(b).length) {
        return false
    }

    for (const key of Object.keys(a)) {
        if (!deepEqual(a[key], b[key])) {
            return false
        }
    }

    return true
}