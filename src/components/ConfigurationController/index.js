import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <div className="configuration-controls-container">
          <div className="responsive-controls-container">
            <h1 className="layout-heading">Layout</h1>
            <div className="checkbox-group">
              <div className="checkbox-container">
                <input
                  checked={showContent}
                  id="content"
                  type="checkbox"
                  onChange={onChangeContent}
                />
                <label className="label-text" htmlFor="content">
                  Content
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  checked={showLeftNavbar}
                  id="leftNavbar"
                  type="checkbox"
                  onChange={onChangeLeftNavbar}
                />
                <label className="label-text" htmlFor="leftNavBar">
                  Left Navbar
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  checked={showRightNavbar}
                  id="rightNavbar"
                  type="checkbox"
                  onChange={onChangeRightNavbar}
                />
                <label className="label-text" htmlFor="rightNavBar">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
