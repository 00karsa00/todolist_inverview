import { insertTodoRep, getAllTodoRep, updateStatusRep, getTodoRep} from "../repository/todoList.repository.js"

export const addTodoData = async (req, res, next) => {
    try {
        let userId = req.userInfo._id;
        let { title, description,priority, date } = req.body;
        date = new Date(date);
        await insertTodoRep({userId, title, description,priority, dueDate:date, userId});
        res.status(200).json({
            error: false,
            message: `Added Successfully`,
        });
    } catch (error) {
        console.log("Error => ", error)
        console.trace();
        next({ message: "Internal Error" })
    }
};

export const getAllTodo = async (req, res, next) => {
    try {
        let userId = req.userInfo._id;
        console.log("req.body => ",req.body)
        let { title, description, priority, date, page, limit } = req.body;
        let insertRes = await getAllTodoRep({userId,description, title,  priority, date, page,limit });
        res.status(200).json({
            error: false,
            message: `Fetch data successfully.`,
            list: insertRes
        });
    } catch (error) {
        console.log("Error => ", error)
        console.trace();
        next({ message: "Internal Error" })
    }
};

export const updateStatus = async (req, res, next) => {
    try {
        let userId = req.userInfo._id;
        let { id } = req.params;
        console.log(req.params,id,)
        let { title, description,priority, date } = req.body;
        date = new Date(date);
        await updateStatusRep({filter: {_id: id,userId}, updateData: {title, description,priority, date}});
        res.status(200).json({
            error: false,
            message: `Updated Successfully`,
        });
    } catch (error) {
        console.log("Error => ", error)
        console.trace();
        next({ message: "Internal Error" })
    }
};

export const complatedTodo = async (req, res, next) => {
    try {
        let userId = req.userInfo._id;
        let { id } = req.params;
        let todoInfo = await getTodoRep({_id: id,userId});
        if(todoInfo.completed) {
            return  next({ status: 200,message: "Already complated." })
        }
        await updateStatusRep({filter: {_id: id, userId }, updateData: { completed: true }});
        res.status(200).json({
            error: false,
            message: `Updated Successfully`,
        });
    } catch (error) {
        console.log("Error => ", error)
        console.trace();
        next({ message: "Internal Error" })
    }
};

export const getTodoInfo = async (req, res, next) => {
    try {
        let userId = req.userInfo._id;
        let { id } = req.params;
        let todoInfo = await getTodoRep({_id: id,userId });
        res.status(200).json({
            error: false,
            message: `fetch data successfully`,
            todoInfo
        });
    } catch (error) {
        console.log("Error => ", error)
        console.trace();
        next({ message: "Internal Error" })
    }
};

export const deleteTodo = async (req, res, next) => {
    try {
        let userId  = req.userInfo._id;
        let { id } = req.params;
        let todoInfo = await getTodoRep({_id: id,userId });
        if(!todoInfo) {
            return  next({ status: 200,message: "Todo not found" });
        }
        if(todoInfo.isDelete) {
            return  next({ status: 200,message: "Already Deleted." });
        }
        if(todoInfo.completed) {
            return  next({ status: 200,message: "Already complated task not be deleted." });
        }

        await updateStatusRep({filter: {_id: id,userId}, updateData: {isDelete: true}});    
        res.status(200).json({
            error: false,
            message: `Updated Successfully`,
        });
    } catch (error) {
        console.log("Error => ", error)
        console.trace();
        next({ message: "Internal Error" })
    }
};
