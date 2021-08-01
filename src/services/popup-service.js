export default class PopupService {
  constructor(args) {
    this.$axios = args.$axios;
  }

  // Get all Popups
  getAllPopups() {
    return this.$axios.get("popup");
  }

  // Update a popup Resource
  createPopup(data) {
    return this.$axios.post("popup", data);
  }

  // Get a popup Resource
  getPopup(id) {
    return this.$axios.get(`popup/${id}`);
  }

  // Update a popup Resource
  updatePopup(data, id) {
    return this.$axios.patch(`popup/update/${id}`, data);
  }
}
