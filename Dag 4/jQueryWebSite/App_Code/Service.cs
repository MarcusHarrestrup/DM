using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel.Activation;



// NOTE: If you change the class name "Service" here, you must also update the reference to "Service" in Web.config and in the associated .svc file.
[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
public class Service : IService
{
    public string GetData(int value)
    {
        return string.Format("You entered: {0}", value);
    }

    
    public string[] GetCoordinate(string Id)
    { 
        return new Coordinate().GetCoordinate(Convert.ToInt32(Id)); 
    }
}



public class Coordinate
{

    Dictionary<int, string> coordinates = null;
    public Coordinate()
    {
        coordinates = new Dictionary<int, string>();
        coordinates.Add(1, "56.707948,9.185257");
        coordinates.Add(2, "56.581095,9.042435");
        coordinates.Add(3, "56.500837,8.738937");
        coordinates.Add(4, "56.62947,8.743057");
    }

    public string[] GetCoordinate(int Id)
    {
        var coordinate = from u in coordinates
                   where u.Key == Id
                   select u.Value;

        return coordinate.ToArray<string>();
    }//

}