import { useState, useEffect } from "react";
import './MainForm.css';
import { useNavigate } from "react-router-dom";

const MainForm = () => {

  const initialValues = { firstname: "", lastname: "", username: "", email: "", password: "", countryCode: "", phoneNo: "", country: "", city: "", panNo: "", AadharNo: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      //   console.log(formValues);
      navigate('/successPage', { state: { ...formValues } });
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "firstname is required!";
    }
    if (!values.lastname) {
      errors.lastname = "lastname is required!";
    }
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters!";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters!";
    }
    if (!values.countryCode) {
      errors.countryCode = "countryCode is required!";
    }
    if (!values.phoneNo) {
      errors.phoneNo = "phoneNo is required!";
    } else if (values.phoneNo.length < 10 || values.phoneNo.length > 10) {
      errors.phoneNo = "phoneNo must be of 10 digits!";
    }

    if (!values.country) {
      errors.country = "Country is required!";
    }
    if (!values.city) {
      errors.city = "City is required!";
    }


    if (!values.panNo) {
      errors.panNo = "PanNo is required!";
    }

    if (!values.AadharNo) {
      errors.AadharNo = "AadharNo is required!";
    }
    return errors;
  };

  return (
    <div className='main'>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2 className='heading'>Login Form</h2>
          <div className="inside-form">
            <div className="cont">
              <label>FirstName</label>
              <input type="text" name="firstname" placeholder="FirstName" value={formValues.firstname}
                onChange={handleChange} />
            </div>
            <p>{formErrors.firstname}</p>
            <div className="cont">
              <label>LastName</label>
              <input type="text" name="lastname" placeholder="LastName" value={formValues.lastname}
                onChange={handleChange} />
            </div>
            <p>{formErrors.lastname}</p>
            <div className="cont">
              <label>Username</label>
              <input type="text" name="username" placeholder="Username" value={formValues.username}
                onChange={handleChange} />
            </div>
            <p>{formErrors.username}</p>
            <div className="cont">
              <label>Email</label>
              <input type='email' name="email" placeholder="Email" value={formValues.email}
                onChange={handleChange} />
            </div>
            <p>{formErrors.email}</p>
            <div className="cont">
              <label>Password</label>
              <input type={showPassword ? 'text' : 'password'} name="password" value={formValues.password} onChange={handleChange} />
              <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <p>{formErrors.password}</p>
            <div className="cont">
              <label>Phone No</label>
              <div className="phone-grp">
                <select name="countryCode" id="code" value={formValues.countryCode} onChange={handleChange}>
                  <option value="">Country Code</option>
                  <option value="+91">+91 (India)</option>
                  <option value="+91">+61 (Australia)</option>
                  <option value="+91">+55 (Brazil)</option>
                </select>
                <input type='number' name="phoneNo" placeholder="Phone No" value={formValues.phoneNo}
                  onChange={handleChange} />
              </div>

            </div>
            <p>{formErrors.countryCode}</p>
            <p>{formErrors.phoneNo}</p>

            <div className="cont">
              <label>Country</label>
              <select name="country" value={formValues.country} onChange={handleChange}>
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="Australia">Australia</option>
                <option value="Brazil">Brazil</option>
              </select>
            </div>
            <p>{formErrors.country}</p>

            <div className="cont">
              <label>City</label>
              <select name="city" value={formValues.city} onChange={handleChange}>
                <option value="">Select City</option>
                {formValues.country === 'India' && (
                  <>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Kolkata">Kolkata</option>
                  </>
                )}
                {formValues.country === 'Australia' && (
                  <>
                    <option value="Sydney">Sydney</option>
                    <option value=" Melbourne"> Melbourne</option>
                  </>
                )}
                {formValues.country === 'Brazil' && (
                  <>
                    <option value="Brasília">Brasília</option>
                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                  </>
                )}
              </select>
            </div>
            <p>{formErrors.city}</p>
            <div className="cont">
              <label>Pan No</label>
              <input type='number' name="panNo" placeholder="Pan No" value={formValues.panNo}
                onChange={handleChange} />
            </div>
            <p>{formErrors.panNo}</p>
            <div className="cont">
              <label>Aadhar No</label>
              <input type='number' name="AadharNo" placeholder="Aadhar No" value={formValues.AadharNo}
                onChange={handleChange} />
            </div>
            <p>{formErrors.AadharNo}</p>
          </div>
          <button className="form-but">Submit</button>
        </form>
      </div>

    </div>
  )
}

export default MainForm

