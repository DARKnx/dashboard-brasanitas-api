import localModel from "../../models/local.js";

export default class localService {

    async create({name}){
        try {
           var local = new localModel({
                name
           }, {new : true});

           await localModel.save();

           return { local }
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    async update({id, data}){
        try {   
           var  local = await localModel.findById(id);
           if (!local ) return { error: "local_not_found"};

           var newLocal = await localModel.findByIdAndUpdate(id, {$set: { ...data}},  { new: true});
           return { local: newLocal }

        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    async delete({id}){
        try {
            var  local = await localModel.findById(id);
            if (!local ) return { error: "local_not_found"};
 
             await localModel.findByIdAndDelete(id);
            return {}
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

}