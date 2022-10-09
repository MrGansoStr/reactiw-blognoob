import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationL = () => {
	return (
		<div className="col-md-4 offset-md-4">
			<div id="paginacion" className="text-white col-12">
				<Stack spacing={2}>
					<Pagination
						count={7}
						variant="outlined"
						shape="rounded"
						color="primary"
					/>
				</Stack>
				<hr />
			</div>
		</div>
	)
}

export default PaginationL;


