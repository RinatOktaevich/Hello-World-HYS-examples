using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Modules.Startup))]
namespace Modules
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
