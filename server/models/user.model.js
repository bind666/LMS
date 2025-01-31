import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please provide username."],
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        // select:false
    },
    role: {
        type: String,
        enum: ["instructor", "student"],
        default: "student"
    },
    enrolledCourses: [
        {
            type: Schema.Types.ObjectId,
            ref: "Course"
            ,
        }
    ],
    photoUrl: {
        type: String,
        default: ""
    }
}, {
    timestamps: true
});


// userSchema.pre("save", async function (next) {
//     try {
//         if (!this.isModified("password")) next()
//         const salt = await bcrypt.genSalt(10); //it generate a salt (big string)
//         this.password = await bcrypt.hash(this.password, salt)
//         next();
//     } catch (error) {
//         next(createError(500, error.message))
//     }
// })


const User = model("User", userSchema)
export default User