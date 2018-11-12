/**
 * Experience store.
 * @class
 */

class ExperienceStore {
  /** Creates experience store. */
  constructor() {
    /** @type {Array<Object>} */
    this.technologies = [{
      fullName: "Frontend",
      shortName: "fe",
      val: "88",
      details: "Vue, Angular 2+, React, Jquery, YUI, Angular JS, D3, Knockout JS, Bootstrap, less, SASS"
    }, {
      fullName: "Backend",
      shortName: "be",
      val: "80",
      details: "Python, PHP, Node, ASP.NET"
    }, {
      fullName: "Wordpress",
      shortName: "wp",
      val: "70",
      details: "Custom SPA theme"
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