const manufacture = (gifts, materials) => {
    return gifts.filter(gift =>
        Array.from(gift).every(letter =>
            materials.includes(letter)
        )
    );
}

const gifts = ['tren', 'oso', 'pelota'];
const materials = 'tronesa';

manufacture(gifts, materials);