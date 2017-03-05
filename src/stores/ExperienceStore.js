/**
 * Experience store.
 * @class
 */

class ExperienceStore {
  /** Creates experience store. */
  constructor() {
    /** @type {Array<Object>} */
    this.technologies = [{
      fullName: "Javascript",
      shortName: "js",
      val: "88",
      details: "Jquery,YUI, Angular JS, D3, Knockout JS"
    }, {
      fullName: "HTML/CSS",
      shortName: "html",
      val: "85",
      details: "Bootstrap, less, SASS, HTML5, CSS3"
    }, {
      fullName: "ASP.NET/C#",
      shortName: "asp",
      val: "70",
      details: "ASP.NET MVC, LINQ, SQL"
    }]
  }

  /**
   * Gets technologies.
   * @return {Array<Object>}
   */
  getTechnologies() {
    return this.technologies;
  }
}

export default new ExperienceStore();