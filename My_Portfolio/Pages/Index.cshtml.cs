using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyPortfolio.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }
        public void OnGet()
        {

        }
        public IActionResult OnPostDownloadPDF(string filePath)
        {
            // Get the physical path of the PDF file
            string physicalPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", filePath.TrimStart('~').TrimStart('/'));

            // Set the file name that will be shown to the user when downloading
            string fileName = "Nahid_CV.pdf";

            // Read the file content
            byte[] fileBytes = System.IO.File.ReadAllBytes(physicalPath);

            // Return the file as a downloadable content
            return File(fileBytes, "application/pdf", fileName);
        }

    }
}