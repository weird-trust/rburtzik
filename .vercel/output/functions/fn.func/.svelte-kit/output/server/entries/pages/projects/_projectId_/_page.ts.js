import { e as error } from "../../../../chunks/index2.js";
import { p as projects } from "../../../../chunks/projects.js";
const load = async ({ params }) => {
  const project = projects.find((p) => p.id === params.projectId);
  if (!project) {
    throw error(404, "Project not found");
  }
  return {
    project
  };
};
export {
  load
};
