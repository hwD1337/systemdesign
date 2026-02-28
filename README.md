# systemdesign
Overview
This project demonstrates a Saga Pattern within a single microservice for an e‑commerce checkout workflow. The workflow includes three steps:
1.Payment
2.Inventory
3.Shipping
Each step supports both do and compensate actions. If any step fails, previously completed steps are rolled back in reverse order using compensating transactions.
