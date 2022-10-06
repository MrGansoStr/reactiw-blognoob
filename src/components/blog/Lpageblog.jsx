
import { Mainimg } from './Mainimg'
import { Introduction } from './Partes/Introduction'
import { Videotutorials } from './Videotutorials'
import { ContentMain } from './Partes/ContentMain'
import { Navright } from '../blog/Navright'
export const Lpageblog = () => {
	return (
		<>
			<br />
			<div className="container-xl border" style={{ width: "97%" }}>
				<Mainimg />
				<div className="row" style={{ Width: "100%" }}>
					<div className="col-md-6  border text-bg-secondary rounded">
						<ContentMain />
					</div>
					<div className="col-md-6 border bg-dark rounded">
						<Navright />
					</div>
				</div>
				<div className="border">
					<Introduction />
					<Videotutorials />
					<p>xdlskafjlksajd lsakdjf lask jdlkf jflkdsaj </p>
				</div>
			</div>
		</>
	)
}