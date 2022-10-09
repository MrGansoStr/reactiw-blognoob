import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationL = () => {
	return (
		<div className="justify-content-center align-items-center">
			<div id="paginacion" className="text-white col-12" style={{margin: "0 auto"}}>
				<hr/>
				<Stack spacing={2}>
					<Pagination
						count={7}
						variant="outlined"
						shape="rounded"
						color="primary"
						sx={{ margin: "0 auto"}}
					/>
				</Stack>
				<hr />
			</div>
		</div>
	)
}

export default PaginationL;


