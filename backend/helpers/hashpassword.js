import bcrypt from 'bcrypt'
async function hashPassword(password) {
    const saltRounds = 10; // You can adjust the cost factor as needed
    try {
      // Generate a salt
      const salt = await bcrypt.genSalt(saltRounds);
  
      // Hash the password with the salt
      const hash = await bcrypt.hash(password, salt);
  
      return hash;
    } catch (error) {
      console.error('Error hashing password:', error);
      throw error;
    }
  }

  export default hashPassword