using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SATCards.Models
{
    public class WordDetail
    {
        public string Name { get; set; }

        [Required(ErrorMessage = "Category is required")]
        [StringLength(60, ErrorMessage = "Category can't be longer than 60 characters")]
        public string Category { get; set; }

        [Required(ErrorMessage = "Description is required")]
        [StringLength(60, ErrorMessage = "Description can't be longer than 60 characters")]
        public string Description { get; set; }

        [Required(ErrorMessage = "Alternates are required")]
        [StringLength(60, ErrorMessage = "Alternates can't be longer than 60 characters")]
        public string Alternates { get; set; }

        [Required(ErrorMessage = "Antonyms are required")]
        [StringLength(60, ErrorMessage = "Antonyms can't be longer than 60 characters")]
        public string Antonyms { get; set; }
    }
}
