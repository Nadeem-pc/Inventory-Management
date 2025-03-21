import express from "express";
const router = express.Router();
import { stdController} from "../controllers/studentController";

router.get('/',stdController.loadStdList);
router.get('/addStudent',stdController.loadAddStudent);
router.post('/addStudent',stdController.addStudent);
router.get('/editStudent/:stdId',stdController.loadEditStudent);
router.post('/editStudent/:stdId',stdController.editStudent);
router.get('/deleteStudent/:stdId',stdController.deleteStudent);

export default router;