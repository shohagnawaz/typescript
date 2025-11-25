// enum
// set of fixed string leteral = ak jaigai rakha

//type UserRoles = "Admin" |  "Editor" | "Viewer";

// const canEdit = (role: UserRoles) => {
//     if(role === "Admin" || role === "Editor") {
//         return true;
//     }
//     else return false
// }
// const result = canEdit("Admin")
// console.log(result)

enum UserRoles {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer"
}
const canEdit = (role: UserRoles) => {
    if(role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else return false
}

// const result = canEdit()