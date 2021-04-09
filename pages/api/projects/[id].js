import DB from "../../../dataBase/db";
import enablePublicAccess from "../../../cors.middleware";

const ProjectDetail = async (req, res) => {
  try {
    await enablePublicAccess(req, res);

    const db = new DB();
    const proId = req.query.id;

    const project = await db.getById(proId);

    res.status(200);
    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(404);
    res.end();
  }
};

export default ProjectDetail;
