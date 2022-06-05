// универсальная функция, которя будет использоваться в редюссерах, что-бы пробегатьсмя по массивам данных и менять его значения на необходимые

// items - элементы массива
// itemId - значения на сравнение (с чем сравнивать)
// objPropName - свойство, которое берем у объекта
// newObjProps  - новые свойства объекта

export const updateOblectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map((u) => {
        if (u[objPropName] === itemId) {
            return { ...u, ...newObjProps }; //* наоборот
        }
        return u;
    })
};