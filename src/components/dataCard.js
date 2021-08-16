export default function DataCard({ title,data }) {
  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center align-items-center">
        <div className={`cardContainer card  m-2`}>
          <div className="card-body p-3">
            <p>
              {title}: {data}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
