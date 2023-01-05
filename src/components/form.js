function Form() {
     return (
     <div>
        <form >
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Rezervuaro talpa (l)</label>
      <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      
    </div>
    <div class="mb-3">
      <label for="greitis" class="form-label">Rezervuaro pildymo greitis </label>
      <input type="number" class="form-control" id="greitis"/>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Laikas, kiek rezervuaras bus pildomas (val.)</label>
      <input type="password" class="form-control" id="exampleInputPassword1"/>
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  </div>
  );
}
export default Form;