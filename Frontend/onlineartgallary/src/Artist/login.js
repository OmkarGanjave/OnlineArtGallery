let Login = () => {
    return(
        <div class="container mt-3">
            <h2>Login</h2>
            <br/>
            <form method="post">
                <label for="artistUserId" class="form-label">Login ID</label>
                <input type="text" name="artistUserId" class="form-control"/>
                
                <label for="password" class="form-label">Password</label>
                <input type="password" name="password" class="form-control"/>
            <br/>
                <button type="submit"  class="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default Login;