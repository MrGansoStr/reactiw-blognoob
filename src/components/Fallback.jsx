import ContentLoader from 'react-content-loader'

const Fallback = (props) => {
  return (
    <>
      <ContentLoader
        speed={1}
        width={400}
        height={200}
        viewBox="0 0 400 200"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="30" y="145" rx="5" ry="5" width="215" height="5" />
        <rect x="6" y="15" rx="0" ry="0" width="267" height="25" />
        <rect x="30" y="121" rx="0" ry="0" width="215" height="5" />
        <rect x="31" y="98" rx="0" ry="0" width="215" height="5" />
        <rect x="35" y="53" rx="0" ry="0" width="208" height="18" />
      </ContentLoader>
    </>
  )
}
export default Fallback;