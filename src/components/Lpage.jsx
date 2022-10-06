import { MdMenu } from "react-icons/md"
export const Lpage = () => {

  return (
    <div className="container-md">
      <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
        <MdMenu />
      </button>
      <div className="collapse container-md" id="collapseExample">
        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
        <div className="card card-body">
        </div>

        
      </div>
      <nav class="navbar-expand-md">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <MdMenu/>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul class="list-group">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">Link</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}