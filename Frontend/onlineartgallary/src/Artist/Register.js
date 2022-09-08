let Register = () => {
    return(
        <div class="container mt-3">
            <h2>Register</h2>
            <br/>
            <form method="post">
            <div class="row">
                <div class="col">
                    <label for="firstName" class="form-label">First Name</label>
                    <input type="text" name="firstName" class="form-control"/>
                </div>
                <div class="col">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input type="text" name="lastName" class="form-control"/>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label for="emailId" class="form-label">Email ID</label>
                    <input type="email" name="emailId" class="form-control"/>
                </div>
                <div class="col">
                    <label for="contactNo" class="form-label">Contact No</label>
                    <input type="number" name="contactNo" class="form-control"/>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label for="address" class="form-label">Address</label>
                    <input type="text" name="address" class="form-control"/>
                </div>
                <div class="col">
                    <label >Select Role</label>
                    <div class="row">
                        <div class="col">  
                            <input type="radio" name="role" value="Artist"/>
                            <label for="role">Artist</label>
                        </div>
                        <div class="col">
                            <input type="radio" name="role" value="Customer"/>
                            <label for="role">Customer</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label for="userId" class="form-label">Create login ID</label>
                    <input type="text" name="userId" class="form-control"/>
                </div>
                <div class="col">
                    <label for="password" class="form-label">Create password</label>
                    <input type="password" name="password" class="form-control"/>
                </div>
            </div>
            <br/>
                <button type="submit"  class="btn btn-primary">Register</button>
            </form>
        </div>        
    );
}

export default Register;