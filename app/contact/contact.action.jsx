// "use server";
// export const contactAction = async (formData) => {
// //   const name = formData.get("fullname");
// //   const email = formData.get("email");
// //   const message = formData.get("message");

// const {fullname, email, message} = Object.fromEntries(formData.entries());
//   // Simulate sending the contact form data
//   console.log({ fullname, email, message });
// };




// "use server";

// export async function contactAction(formData) {
//   const name = formData.get("fullname")?.toString().trim();
//   const email = formData.get("email")?.toString().trim();
//   const message = formData.get("message")?.toString().trim();

//   // Basic validation
//   if (!name || !email || !message) {
//     return { error: "All fields are required." };
//   }

//   if (!email.includes("@")) {
//     return { error: "Invalid email address." };
//   }

//   console.log({ name, email, message });

//   return { success: "Form submitted successfully!" };
// }