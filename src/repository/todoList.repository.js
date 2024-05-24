import todoList from "../models/todoList.js";


export const insertTodoRep = (item) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await todoList.create(item);
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

export const getAllTodoRep = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let filter = {}
            filter.userId = data.userId 
            filter.isDelete = false;
            let pagination = {};
            if (data.title) {
                filter.title = {
                    $regex: data.title,
                    $options: "i"
                }
            }
            if (data.priority) {
                filter.priority = {
                    $in: data.priority
                }
            }
            if (data.description) {
                filter.description = {
                    $regex: data.description,
                    $options: "i"
                }
            }
            if (data.date) {
                filter.dueDate = {
                    $gte: new Date(data.date.from),
                    $lte: new Date(data.date.to)
                }
            }
            if (data.address) {
                filter.name = {
                    $regex: data.address,
                    $options: "i"
                }
            }
            if (data.page) {
                const limit = data.limit || 10;
                pagination.skip = (data.page - 1) * limit;
                pagination.limit = limit;
            }
            console.log("pagination => ", pagination, filter)       
            let result = await todoList.find(filter);
            // console.log(result)
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

export const getTodoRep = (item) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await todoList.findOne(item);
            console.log(result)
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

export const updateStatusRep = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await todoList.updateOne(data.filter,data.updateData);
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

