/**
 * Portfolio store.
 * @class
 */
class PortfolioStore {
  /** Creates portfolio store. */
  constructor() {
    /** @type {Array<Object>} */
    this.projects = [{
      name: 'vkukurba',
      info: "my personal webapplication",
      technologies: "HTML/CSS, SASS, React JS, jQuery JS, Bootstrap 4.",
      images: ['images/opt_my_web_app.png', 'images/opt_my_web_app_2.png',
        'images/opt_my_web_app_3.png'],
      link: "/"
    }, {
      name: 'lidikart',
      info: "gallery site for artist studio LidikART",
      technologies: "Angular JS (1.x), jQuery JS, Bootstrap 3, LESS, PHP.",
      images: ['images/opt_lidik_art_app.png', 'images/opt_lidik_art_app_2.png',
        'images/opt_lidik_art_app_3.png'],
      link: "http://lidikart.com.ua/en"
    }, {
      name: 'fredra',
      info: "info site for social organization fredra.61",
      technologies: "Angular JS (1.x), jQuery JS, Bootstrap 3, LESS, PHP.",
      images: ['images/opt_fredra_61_app.png', 'images/opt_fredra_61_app_2.png',
        'images/opt_fredra_61_app_3.png'],
      link: "http://fredra.org/en"
    }];
  }

  /**
   * Gets portfolio projects.
   * @return {Array<Object>}
   */
  getPortfolioProjects() {
    return this.projects;
  }
}

export default new PortfolioStore()