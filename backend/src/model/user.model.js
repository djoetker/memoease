import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  // To the group creation
  isAdmin: {
    type: Boolean,
    default: false, // Default user is not admin
  },
  groups: [
    {
      type: Schema.Types.ObjectId,
      ref: "Group",
    },
  ],
});

// Group model for creating groups to share content privately.
const groupSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const User = model("User", userSchema);
const Group = model("Group", groupSchema);

export { User, Group };

// Database communication separate from business logic, which is defined in controllers.

// User
// Register
export async function registerUser(userData) {
  const newUser = new User(userData);
  return newUser.save();
}

// Login
export async function loginUser(email) {
  return User.findOne({ email });
}

// Update
export async function updateUser(userId, newData) {
  return User.findByIdAndUpdate(userId, newData, { new: true });
}

// Delete User
export async function deleteUser(userId) {
  return User.findByIdAndDelete(userId);
}

// Group
// Create Group
export async function createGroup(groupData) {
  const newGroup = new Group(groupData);
  return newGroup.save();
}

// Create Group with Members
export async function createGroupWithMembers(groupData, memberIds) {
  const newGroup = new Group(groupData);
  newGroup.members = memberIds;
  return newGroup.save();
}

// Update Group
export async function updateGroup(groupId, updatedGroupData) {
  const updatedGroup = await Group.findByIdAndUpdate(
    groupId,
    updatedGroupData,
    { new: true }
  );
  return updatedGroup;
}

// Delete Group
export async function deleteGroup(groupId) {
  return Group.findByIdAndDelete(groupId);
}
