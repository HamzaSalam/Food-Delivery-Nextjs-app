const {username,password} = process.env
export const connectionStr = "mongodb+srv://"+username+":"+password+"@cluster0.2i3ysbl.mongodb.net/resturentDB?retryWrites=true&w=majority&appName=Cluster0"

// mongodb+srv://hamza:<password>@cluster0.2i3ysbl.mongodb.net/