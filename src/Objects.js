export function personUpdate(person) {
    const updatedPerson = { ...person };

    if (updatedPerson.gender === 'female') {
        delete updatedPerson.age;
    } else if (updatedPerson.gender === 'male') {
        if (updatedPerson.income === undefined) {
            updatedPerson.income = 100000;
        }
    }

    return updatedPerson;
}

export function objectFieldsList(obj1, obj2, obj3) {
    const allKeys = [
        ...Object.keys(obj1),
        ...Object.keys(obj2),
        ...Object.keys(obj3),
    ];

    const uniqueKeys = [...new Set(allKeys)];

    return uniqueKeys.sort();
}

export function objectClone(obj, count) {
    const clones = [];

    for (let i = 0; i < count; i++) {
        const clone = structuredClone(obj);

        clone.id = i;

        clones.push(clone);
    }

    return clones;
}
