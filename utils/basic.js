import { ObjectId } from 'mongodb';
/**
 * Basic utilities
 */
const basicUtils = {
  /**
   * Checks if Id is Valid
   * @id {string|number} id to be evaluated
   * @return {boolean} true if valid, false if not
   */
  isValidId(id) {
    try {
      ObjectId(id);
    } catch (err) {
      return false;
    }
    return true;
  },
};
export default basicUtils;
