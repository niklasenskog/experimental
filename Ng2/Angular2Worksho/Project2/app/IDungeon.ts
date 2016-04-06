// export interface IDungeon {
//     name: string;
//     dungeonId: string;
//     picture: string;    ///path to url image
//     description: string;
//     exits:  [{
//         name:string; 
//         leadsToRoomId: string} ]; // objectId
//     type:string; 
//     actions: [ {
//         verb : string; 
//         conditionResults: [
//             conditions: [
//             {
//                 artifactId: string; // objectID
//                 flag: string; 
//                 operator: string
//             }],
//             results: [{
//                 command: string; 
//                 artifactId: string; 
//                 flag: string; 
//                 value: any;
//             }]
//         ] 
//     }]; 
//     flags: [ { 
//         name: string; 
//         type: string; 
//         value: any;
        
//     } ];
// }