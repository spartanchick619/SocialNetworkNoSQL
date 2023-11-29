const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
        type: String,
        required: true, 
        unique: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: function(v) {
              return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(v);
          }
      }
    },

    friends:[
      {
        type: Schema.Types.ObjectId,
        ref:'User',
      }
    ],
      thoughts:[
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id:false,
  }
);

userSchema.virtual('friendCount').get(function(){
  return this.friends.lenght;
});

const User = model('User',userSchema)

module.exports= User