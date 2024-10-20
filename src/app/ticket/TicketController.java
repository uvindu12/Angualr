@RestController
@RequestMapping("/api/tickets")
public class TicketController {
    @Autowired
    private TicketService ticketService;

    @PostMapping("/create")
    public ResponseEntity<String> createTickets(@RequestBody TicketRequest request) {
        ticketService.createTickets(request.getTotal(), request.getRate());
        return ResponseEntity.ok("Tickets created successfully!");
    }

    @GetMapping
    public ResponseEntity<Integer> getAvailableTickets() {
        int availableTickets = ticketService.getAvailableTickets();
        return ResponseEntity.ok(availableTickets);
    }
}
