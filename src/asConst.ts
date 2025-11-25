// as const assertion

const UserRoles = {
    Admin: "Admin",
    Editor: "Editor",
    User: "User"
} as const;

/*
{
   readonly(modifier) Admin: "Admin",
   readonly(modifier) Editor: "Editor",
   readonly(modifier) User: "User"

   1. typeof operator
   2. keyof operator
}
*/

const canEdit = (role: keyof typeof UserRoles) => {
    if(role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    } else {
        return false;
    }
}
const result = canEdit("User");
console.log(result);

// UserRoles.Admin("nonAdmin")

